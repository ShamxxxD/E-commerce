import Marquee from 'react-fast-marquee';
import '~/scss/layouts/_header.scss';
import { Search, MenuRounded, PersonOutlineOutlined, ShoppingCart } from '@mui/icons-material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 4,
        top: 2,
        padding: '0',
        background: '#ff0000',
        fontSize: '1rem',
        minWidth: '1.5rem',
        height: '1.5rem',
    },
}));

function Header() {
    return (
        <>
            <div className='container header-top'>
                <div className='container-fluid'>
                    <Marquee speed={50} className='header-marquee' gradient={false}>
                        <p>SALE hot chào lương về - Freeship đơn 0đ </p>
                        <p>Miễn phí vận chuyển với đơn hàng trên</p>
                        <p>Khuyến mãi khủng giảm tới 30% tất cả sản phẩm</p>
                    </Marquee>
                </div>
            </div>

            <div className='container header-main'>
                <div className='container-fluid  header-main-wrapper'>
                    <MenuRounded />

                    <div className='header-text-box'>
                        <h1>GREENFOOD</h1>
                    </div>

                    <form className='header-search-box' action=''>
                        <input type='search' placeholder='Bạn đang tìm gì ? ' />
                        <button type='submit'>
                            <Search />
                        </button>
                    </form>

                    <div className='header-account-box'>
                        <PersonOutlineOutlined />
                        <p>Tài khoản</p>
                    </div>

                    <div className='header-cart-box'>
                        <IconButton aria-label='cart' style={{ padding: 0 }}>
                            <StyledBadge badgeContent={4} color='secondary'>
                                <ShoppingCart />
                            </StyledBadge>
                        </IconButton>
                        <p>Giỏ hàng</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
